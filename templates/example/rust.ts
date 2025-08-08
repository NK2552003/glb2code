export function RustExample(componentName){
    return `use wgpu::SurfaceConfiguration;
    use winit::{
        event::*,
        event_loop::{EventLoop, ControlFlow},
        window::WindowBuilder,
    };
    use ${componentName};

    /// Example application for ${componentName} using wgpu
    struct State {
        surface: wgpu::Surface,
        device: wgpu::Device,
        queue: wgpu::Queue,
        config: SurfaceConfiguration,
        size: winit::dpi::PhysicalSize<u32>,
        model: ${componentName},
    }

    impl State {
        async fn new(window: &winit::window::Window) -> Self {
            let size = window.inner_size();
            
            // The instance is a handle to our GPU
            let instance = wgpu::Instance::new(wgpu::Backends::all());
            let surface = unsafe { instance.create_surface(window) };
            let adapter = instance.request_adapter(
                &wgpu::RequestAdapterOptions {
                    power_preference: wgpu::PowerPreference::HighPerformance,
                    compatible_surface: Some(&surface),
                    force_fallback_adapter: false,
                },
            ).await.unwrap();
            
            let (device, queue) = adapter.request_device(
                &wgpu::DeviceDescriptor {
                    features: wgpu::Features::empty(),
                    limits: wgpu::Limits::default(),
                    label: None,
                },
                None,
            ).await.unwrap();
            
            let config = wgpu::SurfaceConfiguration {
                usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
                format: surface.get_preferred_format(&adapter).unwrap(),
                width: size.width,
                height: size.height,
                present_mode: wgpu::PresentMode::Fifo,
            };
            surface.configure(&device, &config);
            
            let model = ${componentName}::new(&device);
            
            Self {
                surface,
                device,
                queue,
                config,
                size,
                model,
            }
        }
        
        fn resize(&mut self, new_size: winit::dpi::PhysicalSize<u32>) {
            if new_size.width > 0 && new_size.height > 0 {
                self.size = new_size;
                self.config.width = new_size.width;
                self.config.height = new_size.height;
                self.surface.configure(&self.device, &self.config);
            }
        }
        
        fn render(&mut self) -> Result<(), wgpu::SurfaceError> {
            let output = self.surface.get_current_frame()?.output;
            let view = output.texture.create_view(&wgpu::TextureViewDescriptor::default());
            
            let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
                label: Some("${componentName} Encoder"),
            });
            
            {
                let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                    label: Some("${componentName} Render Pass"),
                    color_attachments: &[wgpu::RenderPassColorAttachment {
                        view: &view,
                        resolve_target: None,
                        ops: wgpu::Operations {
                            load: wgpu::LoadOp::Clear(wgpu::Color {
                                r: 0.2,
                                g: 0.3,
                                b: 0.3,
                                a: 1.0,
                            }),
                            store: true,
                        },
                    }],
                    depth_stencil_attachment: None,
                });
                
                self.model.render(&mut render_pass);
            }
            
            self.queue.submit(std::iter::once(encoder.finish()));
            Ok(())
        }
    }

    pub async fn run() {
        let event_loop = EventLoop::new();
        let window = WindowBuilder::new()
            .with_title("${componentName} Viewer")
            .build(&event_loop)
            .unwrap();
        
        let mut state = State::new(&window).await;
        
        event_loop.run(move |event, _, control_flow| {
            match event {
                Event::WindowEvent {
                    ref event,
                    window_id,
                } if window_id == window.id() => match event {
                    WindowEvent::CloseRequested => *control_flow = ControlFlow::Exit,
                    WindowEvent::Resized(physical_size) => {
                        state.resize(*physical_size);
                    }
                    WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {
                        state.resize(**new_inner_size);
                    }
                    _ => {}
                },
                Event::RedrawRequested(window_id) if window_id == window.id() => {
                    if let Err(e) = state.render() {
                        eprintln!("{:?}", e);
                        *control_flow = ControlFlow::Exit;
                        return;
                    }
                }
                Event::MainEventsCleared => {
                    window.request_redraw();
                }
                _ => {}
            }
        });
    }

    fn main() {
        #[cfg(target_arch = "wasm32")]
        {
            std::panic::set_hook(Box::new(console_error_panic_hook::hook));
            console_log::init().expect("Could not initialize logger");
            wasm_bindgen_futures::spawn_local(run());
        }
        
        #[cfg(not(target_arch = "wasm32"))]
        {
            pollster::block_on(run());
        }
    }
    `;
}

export function SwiftExample(componentName){
   return `import Metal
    import MetalKit
    import AppKit

    /// View controller for ${componentName} example
    class ${componentName}ViewController: NSViewController {
        var renderer: ${componentName}Renderer?
        
        override func viewDidLoad() {
            super.viewDidLoad()
            
            guard let mtkView = view as? MTKView else {
                print("View is not an MTKView")
                return
            }
            
            // Select the device to render with
            guard let device = MTLCreateSystemDefaultDevice() else {
                print("Metal is not supported on this device")
                return
            }
            
            mtkView.device = device
            mtkView.clearColor = MTLClearColor(red: 0.2, green: 0.3, blue: 0.3, alpha: 1.0)
            
            // Create renderer
            renderer = ${componentName}Renderer(mtkView: mtkView)
            renderer?.loadAssets()
        }
        
        override var acceptsFirstResponder: Bool {
            return true
        }
    }

    /// Renderer for ${componentName}
    class ${componentName}Renderer: NSObject {
        let commandQueue: MTLCommandQueue
        let mtkView: MTKView
        var model: ${componentName}?
        
        init(mtkView: MTKView) {
            self.mtkView = mtkView
            self.commandQueue = mtkView.device!.makeCommandQueue()!
            
            super.init()
            
            mtkView.delegate = self
        }
        
        func loadAssets() {
            // Create the 3D model
            model = ${componentName}(device: mtkView.device!)
        }
    }

    extension ${componentName}Renderer: MTKViewDelegate {
        func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {
            // Handle resize if needed
        }
        
        func draw(in view: MTKView) {
            guard let drawable = view.currentDrawable,
                  let renderPassDescriptor = view.currentRenderPassDescriptor else {
                return
            }
            
            let commandBuffer = commandQueue.makeCommandBuffer()
            let renderEncoder = commandBuffer?.makeRenderCommandEncoder(descriptor: renderPassDescriptor)
            
            // Render the model
            model?.render(renderEncoder: renderEncoder!)
            
            renderEncoder?.endEncoding()
            commandBuffer?.present(drawable)
            commandBuffer?.commit()
        }
    }

    /// macOS application delegate
    class AppDelegate: NSObject, NSApplicationDelegate {
        func applicationDidFinishLaunching(_ notification: Notification) {
            // Create window
            let window = NSWindow(
                contentRect: NSRect(x: 0, y: 0, width: 800, height: 600),
                styleMask: [.titled, .closable, .miniaturizable, .resizable],
                backing: .buffered,
                defer: false
            )
            window.title = "${componentName} Viewer"
            window.center()
            window.makeKeyAndOrderFront(nil)
            
            // Create Metal view
            let metalView = MTKView(frame: window.contentView!.bounds)
            window.contentView?.addSubview(metalView)
            
            // Create view controller
            let viewController = ${componentName}ViewController()
            window.contentViewController = viewController
        }
    }

    // Entry point
    let delegate = AppDelegate()
    NSApplication.shared.delegate = delegate
    _ = NSApplicationMain(CommandLine.argc, CommandLine.unsafeArgv)
    `;
}

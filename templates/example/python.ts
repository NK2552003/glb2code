export function PythonExample(componentName){
     return `"""Example application for ${componentName}"""
import pyglet
import moderngl
import numpy as np
from pyglet.window import key
from pyrr import Matrix44
from .${componentName} import ${componentName}

class ${componentName}App:
    """Example application for ModernGL implementation"""
    
    def __init__(self, width: int = 800, height: int = 600):
        self.window = pyglet.window.Window(width, height, caption='${componentName} Viewer')
        self.ctx = moderngl.create_context()
        
        # Create matrices
        self.projection = Matrix44.perspective_projection(50, width/height, 0.1, 1000)
        self.view = Matrix44.look_at([0, 0, 5], [0, 0, 0], [0, 1, 0])
        
        # Create the 3D component
        self.scene = ${componentName}(self.ctx)
        
        # Animation state
        self.rotation = 0
        
        # Set up event handlers
        self.window.event(self.on_draw)
        self.window.event(self.on_resize)
        self.window.event(self.on_key_press)
        
    def on_draw(self):
        """Handle window draw event"""
        self.window.clear()
        self.ctx.enable(moderngl.DEPTH_TEST)
        
        # Update rotation
        self.rotation += 0.5
        model = Matrix44.from_y_rotation(np.radians(self.rotation))
        
        # Render the scene
        self.scene.render(self.projection, self.view, model)
        
    def on_resize(self, width: int, height: int):
        """Handle window resize event"""
        self.projection = Matrix44.perspective_projection(50, width/height, 0.1, 1000)
        
    def on_key_press(self, symbol: int, modifiers: int):
        """Handle key press events"""
        if symbol == key.ESCAPE:
            pyglet.app.exit()
            
    def run(self):
        """Start the application"""
        pyglet.app.run()

if __name__ == '__main__':
    app = ${componentName}App()
    app.run()
`;
}

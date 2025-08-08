
   export function RubyExample(componentName){
    return `# Example application for ${componentName} using Ruby OpenGL
    require 'opengl'
    require 'glut'
    include Gl, Glu, Glut
    class ${componentName}App
      def initialize
        glutInit
        glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH)
        glutInitWindowSize(800, 600)
        glutCreateWindow("${componentName} Viewer")
        glEnable(GL_DEPTH_TEST)
        @model = ${componentName}.new
        glutDisplayFunc(method(:display))
        glutIdleFunc(method(:idle))
      end
      def display
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
        @model.render
        glutSwapBuffers
      end
      def idle
        glutPostRedisplay
      end
      def run
        glutMainLoop
      end
    end
    if __FILE__ == $0
      app = ${componentName}App.new
      app.run
    end
    `;
   }
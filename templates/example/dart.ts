export function DartExample(
  componentName
) {
 return `import 'package:flutter/material.dart';
    import 'package:opengl/opengl.dart';
    import 'package:flutter_gl/flutter_gl.dart';
    /**
     * Example application for ${componentName} using Flutter OpenGL
     */
    class ${componentName}Page extends StatefulWidget {
      @override
      _${componentName}PageState createState() => _${componentName}PageState();
    }

    class _${componentName}PageState extends State<${componentName}Page> {
      late OpenGLRenderer _renderer;
      late FlutterGlPlugin _glPlugin;
      late ${componentName} _model;
      double _rotation = 0.0;

      @override
      void initState() {
        super.initState();
        _glPlugin = FlutterGlPlugin();
        _glPlugin.initialize().then((_) {
          _renderer = OpenGLRenderer(_glPlugin);
          _model = ${componentName}();
          _startAnimation();
        });
      }

      void _startAnimation() {
        Future.delayed(Duration(milliseconds: 16), () {
          if (mounted) {
            _rotation += 0.01;
            setState(() {});
            _startAnimation();
          }
        });
      }

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(title: Text('${componentName} Viewer')),
          body: Builder(
            builder: (context) => GestureDetector(
              onPanUpdate: (details) => setState(() => _rotation += details.delta.dx * 0.01),
              child: CustomPaint(
                painter: _${componentName}Painter(_renderer, _model, _rotation),
                size: Size.infinite,
              ),
            ),
          ),
        );
      }

      @override
      void dispose() {
        _glPlugin.dispose();
        super.dispose();
      }
    }

    class _${componentName}Painter extends CustomPainter {
      final OpenGLRenderer renderer;
      final ${componentName} model;
      final double rotation;

      _${componentName}Painter(this.renderer, this.model, this.rotation);

      @override
      void paint(Canvas canvas, Size size) {
        renderer.render((gl) {
          gl.clearColor(0.2, 0.3, 0.3, 1.0);
          gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
          gl.enable(GL_DEPTH_TEST);
          
          // Render model
          model.render();
        });
      }

      @override
      bool shouldRepaint(_) => true;
    }
    `;
}

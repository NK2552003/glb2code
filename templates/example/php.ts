
    export function PHPExample(componentName){
        return `<?php
    /**
     * Example application for ${componentName} using PHP-GLFW
     */
    require_once 'vendor/autoload.php';
    use GL\\GL;
    use GL\\Window\\Window;
    class ${componentName}App {
        private $window;
        private $model;
        public function __construct() {
            $this->init();
        }
        private function init() {
            $this->window = new Window(800, 600, "${componentName} Viewer");
            $this->window->setSwapInterval(1);
            $this->model = new ${componentName}();
        }
        public function run() {
            while (!$this->window->shouldClose()) {
                GL::clear(GL::COLOR_BUFFER_BIT | GL::DEPTH_BUFFER_BIT);
                // Render model
                $this->model->render();
                $this->window->swapBuffers();
                $this->window->pollEvents();
            }
        }
    }
    if (php_sapi_name() === 'cli') {
        $app = new ${componentName}App();
        $app->run();
    }
    `;
  }

export function PHPMesh(meshName){
return `<?php
    /**
     * ${meshName} mesh component for PHP-GLFW
     */
    class ${meshName} {
        private $geometry;
        private $material;
        public function __construct($material = null) {
            $this->geometry = new ${meshName}Geometry();
            $this->material = $material;
        }
        public function render() {
            if ($this->material) {
                $this->material->use();
            }
            $this->geometry->render();
        }
    }
    `;      
}
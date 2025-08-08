import { formatArrayData } from "@/lib/functions/formatArrayData";

    export function PHPGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
        return `<?php
    /**
     * ${meshName} geometry definition for PHP-GLFW
     */
    class ${meshName}Geometry {
        private $vao;
        private $vbo;
        ${indices ? "private $ebo;" : ""}
        private $vertexCount;
        public function __construct() {
            $this->setupBuffers();
        }
        private function setupBuffers() {
            // Position data
            $positions = ${formatArrayData(positions, languageId)};
            ${normals
          ? `$normals = ${formatArrayData(normals || [], languageId)};`
          : ""
        }
            ${uvs ? `$uvs = ${formatArrayData(uvs || [], languageId)};` : ""}
            ${indices ? `$indices = array(${indices.join(", ")});` : ""}
            
            $this->vao = glfwCreateVertexArray();
            $this->vbo = glfwCreateBuffer();
            ${indices ? "$this->ebo = glfwCreateBuffer();" : ""}
            
            glfwBindVertexArray($this->vao);
            // Position buffer
            glfwBindBuffer(GLFW_ARRAY_BUFFER, $this->vbo);
            glfwBufferData(GLFW_ARRAY_BUFFER, count($positions) * 4, $positions, GLFW_STATIC_DRAW);
            glfwVertexAttribPointer(0, 3, GLFW_FLOAT, false, 3 * 4, 0);
            glfwEnableVertexAttribArray(0);
            ${normals
          ? `// Normal buffer
            glfwBufferData(GLFW_ARRAY_BUFFER, count($normals) * 4, $normals, GLFW_STATIC_DRAW);
            glfwVertexAttribPointer(1, 3, GLFW_FLOAT, false, 3 * 4, 0);
            glfwEnableVertexAttribArray(1);`
          : ""
        }
            ${uvs
          ? `// UV buffer
            glfwBufferData(GLFW_ARRAY_BUFFER, count($uvs) * 4, $uvs, GLFW_STATIC_DRAW);
            glfwVertexAttribPointer(2, 2, GLFW_FLOAT, false, 2 * 4, 0);
            glfwEnableVertexAttribArray(2);`
          : ""
        }
            ${indices
          ? `// Element buffer
            glfwBindBuffer(GLFW_ELEMENT_ARRAY_BUFFER, $this->ebo);
            glfwBufferData(GLFW_ELEMENT_ARRAY_BUFFER, count($indices) * 4, $indices, GLFW_STATIC_DRAW);
            $this->vertexCount = count($indices);`
          : `$this->vertexCount = count($positions) / 3;`
        }
            glfwBindVertexArray(0);
        }
        public function render() {
            glfwBindVertexArray($this->vao);
            ${indices
          ? "glfwDrawElements(GLFW_TRIANGLES, $this->vertexCount, GLFW_UNSIGNED_INT, 0);"
          : "glfwDrawArrays(GLFW_TRIANGLES, 0, $this->vertexCount);"
        }
            glfwBindVertexArray(0);
        }
    }
    `;}
import { formatArrayData } from "@/lib/functions/formatArrayData";

export function CPPGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
    return `#pragma once
    #include <vector>
    #include <GL/glew.h>
    #include <glm/glm.hpp>
    
    /**
     * ${meshName} geometry definition for OpenGL with GLM
     */
    class ${meshName}Geometry {
    private:
        GLuint VAO, VBO${indices ? ", EBO" : ""};
        ${indices ? "int indexCount;" : "int vertexCount;"}
        
    public:
        ${meshName}Geometry() {
            setupBuffers();
        }
        
        ~${meshName}Geometry() {
            cleanup();
        }
        
    private:
        void setupBuffers() {
            // Position data
            std::vector<float> positions = ${formatArrayData(
            positions,
            languageId
          )};
            ${normals
              ? `std::vector<float> normals = ${formatArrayData(
                normals || [],
                languageId
              )};`
              : ""
            }
            ${uvs
              ? `std::vector<float> uvs = ${formatArrayData(
                uvs || [],
                languageId
              )};`
              : ""
            }
            ${indices
              ? `std::vector<unsigned int> indices = {${indices.join(", ")}};`
              : ""
            }
            
            glGenVertexArrays(1, &VAO);
            glGenBuffers(1, &VBO);
            ${indices ? "glGenBuffers(1, &EBO);" : ""}
            
            glBindVertexArray(VAO);
            
            // Position buffer
            glBindBuffer(GL_ARRAY_BUFFER, VBO);
            glBufferData(GL_ARRAY_BUFFER, positions.size() * sizeof(float), positions.data(), GL_STATIC_DRAW);
            glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
            glEnableVertexAttribArray(0);
            
            ${normals
              ? `// Normal buffer
            glBufferData(GL_ARRAY_BUFFER, normals.size() * sizeof(float), normals.data(), GL_STATIC_DRAW);
            glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
            glEnableVertexAttribArray(1);`
              : ""
            }
            
            ${uvs
              ? `// UV buffer
            glBufferData(GL_ARRAY_BUFFER, uvs.size() * sizeof(float), uvs.data(), GL_STATIC_DRAW);
            glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);
            glEnableVertexAttribArray(2);`
              : ""
            }
            
            ${indices
              ? `// Element buffer
            glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
            glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), indices.data(), GL_STATIC_DRAW);
            indexCount = indices.size();`
              : `vertexCount = positions.size() / 3;`
            }
            
            glBindVertexArray(0);
        }
        
    public:
        void render() {
            glBindVertexArray(VAO);
            ${indices
              ? "glDrawElements(GL_TRIANGLES, indexCount, GL_UNSIGNED_INT, 0);"
              : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);"
            }
            glBindVertexArray(0);
        }
        
        void cleanup() {
            glDeleteVertexArrays(1, &VAO);
            glDeleteBuffers(1, &VBO);
            ${indices ? "glDeleteBuffers(1, &EBO);" : ""}
        }
    };
    `;
}

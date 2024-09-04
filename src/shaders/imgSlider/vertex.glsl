varying vec2 vUv;
uniform vec2 uDelta;
uniform float uAmplitude;

void main() {
    vUv = uv;
    float PI = 3.141592653589793238;
    vec3 newPosition = position;
    newPosition.x += sin(uv.y * PI) * uDelta.x * uAmplitude;
    newPosition.y += sin(uv.x * PI) * uDelta.y * uAmplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
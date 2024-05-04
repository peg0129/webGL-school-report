
attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;
uniform mat4 mvpMatrix;
uniform mat4 normalMatrix; // 法線変換行列 @@@
varying vec3 vNormal;
varying mat4 vNormalMatrix;
varying vec4 vColor;

void main() {

  vNormal = normal;
  vNormalMatrix = normalMatrix;
  vColor = color;

  // MVP 行列と頂点座標を乗算してから出力する
  // 第4引数は、平行移動成分を残す為に0にする。
  gl_Position = mvpMatrix * vec4(position, 1.0);
}


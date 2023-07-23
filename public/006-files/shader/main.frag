precision mediump float;

varying vec3 vNormal;
varying mat4 vNormalMatrix;
varying vec4 vColor;

// ライトベクトルはひとまず定数で定義する
const vec3 light = vec3(1.0, 1.0, 1.0);

void main() {
  // 法線をまず行列で変換する @@@
  // 第4引数は、平行移動成分を打ち消す為に0にする。
  vec3 n = (vNormalMatrix * vec4(vNormal, 0.0)).xyz;

  // 変換した法線とライトベクトルで内積を取る @@@
  float d = dot(normalize(n), normalize(light));

  // 内積の結果を頂点カラーの RGB 成分に乗算する
  vec4 color = vec4(vColor.rgb * d, vColor.a);
  
  gl_FragColor = color;
}


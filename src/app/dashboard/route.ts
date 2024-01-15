// route.ts 파일을 생성하고 HTTP 통신을 함수 이름으로 작성한다
export async function GET() {
  // JS Response 객체로 `/hello`로 들어온 GET요청 처리
  return new Response("DashBoard Data");
}

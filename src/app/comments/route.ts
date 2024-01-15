import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

// 라우트 핸들러는 request 파라미터로 들어온 값을 받는다
export async function POST(request: Request) {
  // 요청받은 데이터 저장
  const comment = await request.json();

  // 들어온 데이터 객체로 만들어서 commets DB에 집어넣기
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);

  // 응답 객체 생하고 JSON 형식으로 반환한 다음 headers 설정
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

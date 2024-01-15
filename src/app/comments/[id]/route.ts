import { comments } from "../data";

// 핸들러 함수는 파라미터를 두 개 가진다
// request 파라미터에는 요청값이 들어온다
// context 파라미터에는 슬러그로 사용한 id가 들어온다
export async function GET(
  _request: Request, //request는 사용하고 있지 않기 때문에 _를 붙여준다
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

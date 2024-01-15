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

/* PATCH */
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  // PATCH는 전달받은 데이터가 필요하기 때문에 request 파라미터에 접근한다
  const body = await request.json();
  const { text } = body;

  // findIndex로 comment 중에 params와 id값이 일치하는 인덱스값을
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  // 배열의 인덱스에 접근해 값을 업데이트 시킨다
  comments[index].text = text;
  return Response.json(comments[index]);
}

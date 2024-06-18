export function GET(request, { params }) {
  return Response.json({
    name: "Paweena",
    major: "IT",
    lv: "3",
    id: params.id,
  });
}

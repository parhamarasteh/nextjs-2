
export default async function ProductPage({ params }) {
  await new Promise((resolve)=>setTimeout(resolve,3000))
  const paramsData = await params
  return (
    <div className="flex flex-col gap-4 p-16" >
      {paramsData?.params?.map((item, index) => {
        return <span key={index}>{item}</span>
      })}
    </div>
  );
}

const remote = (context) => {
  console.log("in remote")
  console.log(context.fs.read("index.js"))
}

export default remote

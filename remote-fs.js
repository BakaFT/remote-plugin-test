const remote = (context) => {
  console.log("in remote")
  context.fs.read("index.js")
}

export default remote

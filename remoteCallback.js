const remoteCallback = (args) => {
    console.log(...args)
    const res1 = getLocalScriptPath()
    const res2 = getLocalPluginName()
    console.log(":)")
}

export default remoteCallback

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    createRedirect({
        fromPath: "/*",
        toPath: "https://apply.skills.fund/",
        isPermanent: true,
        force: true,
    })
}

exports.get404 = (req, res) =>
{
    res.status(404).render("404", { pageTitle: "صفحه مورد نظر پیدا نشد" });
};

window.CreateTable = function(params) {
    var url = params.url;
    var image_list = params.image_list;
    var version_list = params.version_list;
    var idx_version = 0;
    return {
        view: function() {
            return m("table.wrapped.confluenceTable", [m("tr", [m("th.confluenceTh[width=300px]", "Version"), image_list.map(function(image) {
                return m("th.confluenceTh", image)
            }), ]), m("tr", [m("td.confluenceTd", m("div", {
                "style": "width: 300px"
            }, version_list.map(function(elem, idx) {
                return m("p", {
                    onmouseenter: function() {
                        idx_version = idx;
                    },
                    style: {
                        "backgroundColor": idx == idx_version ? "#DEF" : "",
                        "fontWeight": idx == idx_version ? "bold" : ""
                    }
                }, elem.description);
            }))), image_list.map(function(elem) {
                return m("td.confluenceTd", m("img[width=400][height=300]", {
                    "src": url + version_list[idx_version].prefix + elem + version_list[idx_version].suffix + ".jpg?api=v2"
                }))
            })])])
        }
    }
}

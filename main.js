var app = new Vue({
    el: "#NotebookApp",
    data: {
        notebookContent: []
    },
    created: function () {
        let localData = JSON.parse(localStorage.getItem("notebookContent"))
        localData ?
            this.notebookContent = localData
            :
            this.notebookContent = [{ "content": "Welcome to Notebook!" }]
    },
    methods: {
        AddContent: function () {
            app.notebookContent.push({ "content": "" })
            app.SaveNotes()
        },
        DeleteContent: function (index) {
            app.notebookContent.splice(index, 1)
        },
        SaveNotes: function () {
            localStorage.setItem("notebookContent", JSON.stringify(app.notebookContent))
        }
    }
})
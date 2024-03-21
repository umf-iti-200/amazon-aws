$(function () {

    hljs.highlightAll();


    $("h2").each(function (i, item) {

        const $el = $(this);
        const text = $el.text();
        const id = text.toLowerCase().replace(/[\W_]+/g, "-");

        $el.prop("id", id);

        $("#table-of-contents-items").append(`
            <li><a href="#${id}" class="mt-2">${text}</a></li>
        `)

        console.log(name)


    })

});
var limit = 10;
var page = 1;
function getData() {
    var url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${page}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        str = ''
        data.forEach((value, index) => {
            str += `<div class="media my-3 bg-info text-center">
                        <div class="media-body">
                            <h5 class="mt-0">${value.title}</h5>
                            <p>${value.body}</p>
                        </div>
                    </div>`;
        })
        document.getElementById('b1').innerHTML = str;
    })
}
getData();
function setData()
{
    setTimeout(() => {
        limit+=5;
        getData();
    }, 300);
}

window.addEventListener('scroll', () => {
    let s1 = document.documentElement.scrollHeight;
    let s2 = document.documentElement.scrollTop;
    let s3 = document.documentElement.clientHeight;
    if (s2 + s3 >= s1) {
        setData();
    }
})
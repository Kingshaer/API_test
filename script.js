fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
	return response.json()
})
.then(function (data) {
	appendData(data)
})
.catch(function(err){
	console.log('error: '+ err)
})
	
function appendData(data) {
	var mainCon = document.getElementById("MyData");
	for(var i = 0; i < data.length; i++){
		var div = document.createElement("div");
        div = [{userId:''+data[i].userId +'', id: ''+data[i].id+'', title: ''+data[i].title+'', body: ''+data[i].body+''},];
                    const tableData = data.map(function(value){
                        return (
                            `<tr>
                                <td>${value.id}</td>
                                <td>${value.userId}</td>
                                <td>${value.title}</td>
                                <td>${value.body}</td>
                            </tr>`
                        );
                    }).join('');
                const tabelBody = document.querySelector("#tableBody");
                    tableBody.innerHTML = tableData;
		//div.innerHTML = "userId: "+ data[i].userId + " <br> id :"+ data[i].id + "<br> title :"+ data[i].title + "<br> body: "+ data[i].body +"<br><br>";
		
		mainCon.appendChild(div);
	}
}

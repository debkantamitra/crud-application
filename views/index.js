<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Candidates</title>
</head>
<body>
    <h2>Candidates Table:</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
        <% for(let i=0;i<data.length;i++){ %>
            <tr>
                <td><%= data[i].name %></td>
                <td><%= data[i].email %></td>
            </tr> 
        <% } %>   
    </table>
    <br>
    <a href="/add_candidate">Add new candidate</a>
</body>
</html>

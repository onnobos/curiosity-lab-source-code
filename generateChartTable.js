const { users } = inputs

console.log("users", users)

let data = [['x', "Mobile",{ role: 'style' }]];

  for (var i=0; i < users.length; i++) {

    const {period, mobile} = users[i]

    data.push([period, parseInt(mobile), '#ed3ace'])
  }

return { result: data};

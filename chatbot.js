

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/facebook/blenderbot-3B",
		{
			headers: { Authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

const { messages, user_text } = inputs

let past_user_inputs = [];
let generated_responses = [];

for (const message of messages){
  past_user_inputs.push(message.user_input)
  generated_responses.push(message.response)
}

// Prepare Query
const queryInput = {"inputs": {
		"past_user_inputs": past_user_inputs,
		"generated_responses": generated_responses,
		"text": user_text
	}
}

 let newMessages = [...messages]
 newMessages.push({
      datetime: moment().format(),
    })

const response = await query(queryInput);
console.log(JSON.stringify(response));
let result = []
console.log(response.conversation.generated_responses.length)
for (var i = 0; i < response.conversation.generated_responses.length; i++) {
	result.push({
		datetime: newMessages[i].datetime,
		id: String(i + 1),
		response: response.conversation.generated_responses[i],
		user_input: response.conversation.past_user_inputs[i],
	})
}

console.log("result", result)
return { result };



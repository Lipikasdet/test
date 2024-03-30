    // Listen for messages from the parent window
    window.addEventListener('message', function(event) {
        if (event.origin !== 'http://localhost:8080') return; // Ensure messages are from an allowed origin
        console.log('Message received from parent:', event.data);
        const decodedData = JSON.parse(atob(event.data));
        const actions = decodedData?.actions?.filter(action => !!action)?.map(action => {
            let [newAction, selector, ...value] = action.split(" ");
            return {
            action: newAction,
            selector,
            value: value ? value.join(" ") : ''
            }
        })
        let body = {
            url: decodedData.url,
            actions
        }
        const code = body.actions.forEach(action => {
            if (action.action === "type") {
                document.querySelector(action.selector).value=action.value;
            } else if (action.action === "click") {
                document.querySelector(action.selector).click();
            }
        })
        // Send a response back to the parent window
        event.source.postMessage('Response from remote site', event.origin);
    });

    function testAlert() {
        console.log('++++ submit button is clicked +++++')
    }

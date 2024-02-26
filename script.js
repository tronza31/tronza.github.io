class MessageBox
{
    constructor(divId, message)
    {
        this.divId = divId;
        this.message = message;
    }

    PrintMessage()
    {
        let div = document.getElementsByClassName(this.divId)[0];

        if (div !== null && div !== undefined)
        {
            let message = document.createElement("p");
            message.innerText = this.message;
            div.appendChild(message); 
        }
        else
        {
            console.log("Container not founded");
        }
    }
}

function AddTextContainer()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.watchPosition(
            function (position)
            {
                console.log(position);

                const CONTAINER_CLASS = "container";
                const MESSAGE = `${position.coords.latitude}, ${position.coords.longitude}`;

                let messageBox = new MessageBox(CONTAINER_CLASS, MESSAGE);
                messageBox.PrintMessage();
            },
            function (err)
            {
                alert('Вы запретили местоположение');
            });
    }
    else
    {
        alert("У Вас отстутсвует местоположение");
    }
}
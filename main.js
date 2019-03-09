"use strict";

/**
 * @text - message to output (string)
 * @speed - miliseconds per character (integer)
 **/
async function setDescription(text, speed)
{
    for (let i = 1; i <= text.length; i++)
    {
        description.textContent = text.substr(0, i);
        await sleep(speed);
    }
}

/**
 * @ms - delay in miliseconds (integer)
 **/
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startChangingDescription()
{
    while (true)
    {
        await setDescription(message1, 15);
        await sleep(7000);
        await setDescription(message2, 15);
        await sleep(7000);
    }
}

const message1 = "Professional artist, programmer, game developer and even a film critic!";
const message2 = "What are you waiting for? Contact now!";
const description = document.getElementById("peter-description");

startChangingDescription();

export function stealth(message, client) {
    const content = message.content.trim();
    const [command, target] = content.split(' ');
    let stealthMode = false;

    if (command === '!stealth') {
        client.user.setStatus('invisible');
        stealthMode = true;
        return stealthMode;

    }
    else if (command === '!stealthOff') {
        client.user.setStatus('online');
        stealthMode = false;
        return stealthMode;
    }
    return stealthMode;
}
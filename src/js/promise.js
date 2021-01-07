function Promise(f) {
    this.pending;
    this.success;

    this.then = function () {
    }

    this.catch = function () {
    }
}

function a(b) {
    return new Promise((resolve, reject) => {
        if (b) {
            resolve('success');
            return;
        }
        reject('fail');
    });
}

async function b() {
    let p = await a(true);
    let p = await a(true);
    let p = await a(true);

    p.then((data) => {
        p.then((data2) => {

        })
    })
}


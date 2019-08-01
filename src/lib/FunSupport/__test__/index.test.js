import func from '../index.js'

test('test add fun', () => {
    expect(func(0, 0)).not.toBeUndefined()
})

const fetchData = function(value){
    const pro = new Promise(function(res, rej){
        value ? res('success') : rej('error')
    })
    return pro
}

test('expect fetchData error', () => {
    expect.assertions(1);
    expect(fetchData()).resolves.toMatch('error')
})
try {
    console.log('Open Folder')
    console.log(' "Manipulei o arquivo porem gerou erro" ')
    console.log('fechei o arquivo')
} catch(e) {
    console.log('tratando o erro')
} finally {
    console.log('Finally: Sempre executa')
}
import Autopass from 'autopass'
import Corestore from 'corestore'

const pass = new Autopass(new Corestore(Pear.app.storage + '/pass'))

const inv = await pass.createInvite()
console.log('share to add', inv)
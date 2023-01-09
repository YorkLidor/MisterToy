
import {storageService} from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'toyDB'
_createToys()

export const toyService = {
    query,
    getById,
    save,
    remove,
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
}

function _createToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (!toys || !toys.length) {
        toys = [
            {
                _id: 't101',
                name: 'Talking Doll',
                price: 123,
                labels: ['Doll', 'Battery Powered', 'Baby'],
                createdAt: 1631031801011,
                inStock: true
            },
            {
                _id: 't102',
                name: 'Remote Car',
                price: 100,
                labels: ['Battery Powered', 'Baby'],
                createdAt: 1631031801011,
                inStock: true
            },
            {
                _id: 't103',
                name: 'Rubber Duck',
                price: 200,
                labels: ['Doll','Baby'],
                createdAt: 1631031801011,
                inStock: true
            },
        ]
        utilService.saveToStorage(STORAGE_KEY, toys)
    }
}


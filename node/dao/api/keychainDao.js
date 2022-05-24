const con = require('../../config/dbconfig')

const daoCommon = require('../daoCommon')

const keychainDao = {

    ...daoCommon, 
    
    table: 'keychain',

    create: (req, res)=> {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error":true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO keychain SET ${fields.join(' = ?, ')} = ?`,
                values,
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error creating record')
                    }
                } 
            )
        }   
    },

    update: (req, res) => {
        if(isNaN(req.params.id)) {
            res.json({
                "error":true,
                "message":"No fields no update"
        })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

    con.execute (
        `UPDATE keychain SET ${fields.join(' = ?, ')} = ? WHERE keychain_id = ?`,
        [...values, req.params.id],
            (error, dbres) => {
                if(!error) {
                    res.send(`Changed ${dbres.changeRows} row(s)`)
                    } else {
                    console.log('DAO ERROR', error)
                    res.send('Error updating record')
                }
            }
        )
    } 
},

    sort: (req, res)=> {
        con.execute(
            `SELECT * FROM keychain ORDER By name`,
            [req.body],
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    }
}

module.exports = keychainDao
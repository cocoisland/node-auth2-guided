
function restrictRole(role) {
    return (req, res, next) => {
        if (req.token && req.token.userRole === role){
            next()
        } else {
            res.status(401).json({message: role + " role is needed to access this resources."})
        }
    }
};
 
module.exports =  restrictRole 
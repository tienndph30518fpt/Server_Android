const Item = require("../modul/productModule");

const isEmpty = require("lodash/isEmpty");

exports.getList = (rep, res) => {
    Item.find().then((item) =>{
        res.render("products/index", { item, layout: "layouts/main" });
    }).catch((err) => {
        console.log("Loi danh sach", err);
    })
}

exports.getListApi = (rep, res) => {
    Item.find().then((item) =>{
        res.json({ item});
    }).catch((err) => {
        console.log("Loi danh sach", err);
    })
}
exports.getFromAdd = (rep, res) => {
    Item.find().then(() =>{
        res.render("products/add", {  layout: "layouts/main" });
    }).catch((err) => {
        console.log("Loi danh sach", err);
    })
}

exports.postAdd = (rep, res) => {
    const itemNew = new Item({
        ten: rep.body.ten,
        hang: rep.body.hang,
        anh: rep.file.path,
        gia: rep.body.gia,
        binh_luan: rep.body.binh_luan,

        
    })
    itemNew.save().then(() => {
        res.redirect("/");
    }).catch((err) => {
        console.log("Loi ", err);
    })
}


exports.postAddApi = (rep, res) => {
    const itemNew = new Item({
        ten: rep.body.ten,
        hang: rep.body.hang,
        anh: rep.file.path,
        gia: rep.body.gia,
        binh_luan: rep.body.binh_luan,

        
    })
    itemNew.save().then((item) => {
        res.json({item});
    }).catch((err) => {
        console.log("Loi ", err);
    })
}


exports.getFromEdit = (rep, res) => {
    const id = rep.params.id;
    Item.findById(id).then((item) =>{
        res.render("products/edit", {item,  layout: "layouts/main" });
    }).catch((err) => {
        console.log("Loi danh sach", err);
    })
}

exports.postEdit = (rep, res) => {
    const id = rep.params.id;

    const upload = {
        ten: rep.body.ten,
        hang: rep.body.hang,
       
        gia: rep.body.gia,
        binh_luan: rep.body.binh_luan,
    }
    if (rep.file) {
        upload.anh = rep.file.path
    }
    Item.findByIdAndUpdate(id, upload).then(() => {
        res.redirect("/");
    }).catch((err) => {
        console.log("Loi ", err);
    })
}


exports.postEditApi = (rep, res) => {
    const id = rep.params.id;

    const upload = {
        ten: rep.body.ten,
        hang: rep.body.hang,
       
        gia: rep.body.gia,
        binh_luan: rep.body.binh_luan,
    }
    if (rep.file) {
        upload.anh = rep.file.path
    }
    Item.findByIdAndUpdate(id, upload).then((item) => {
        res.json({item});
    }).catch((err) => {
        console.log("Loi ", err);
    })
}


exports.delete = (rep, res) => {
    const id = rep.params.id;
    Item.findByIdAndDelete(id).then((item) =>{
        res.redirect("/");
    }).catch((err) => {
        console.log("Loi ", err);
    })
}



exports.deleteApi = (rep, res) => {
    const id = rep.params.id;
    Item.findByIdAndDelete(id).then((item) =>{
        res.json({item});
    }).catch((err) => {
        console.log("Loi ", err);
    })
}


exports.search = (rep, res) => {
    if (!isEmpty(rep.body.search)) {
        const id = rep.body.search;
        const regex = new RegExp(id, "i");

        const searchQuery = {
            $or: [{hang: {$regex: regex}}]
        }

        Item.find(searchQuery).then((item) => {
            res.render("products/index", {item,  layout: "layouts/main" });
        }).catch((err) => {
            console.log("Loi danh sach", err);
        })
    } else {
        Item.find().then((item) => {
            res.render("products/index", {item,  layout: "layouts/main" });
        }).catch((err) => {
            console.log("Loi danh sach", err);
        })
    }
}


exports.searchApi = (rep, res) => {
    if (!isEmpty(rep.body.search)) {
        const id = rep.body.search;
        const regex = new RegExp(id, "i");

        const searchQuery = {
            $or: [{hang: {$regex: regex}}]
        }

        Item.find(searchQuery).then((item) => {
            res.json({item});
        }).catch((err) => {
            console.log("Loi danh sach", err);
        })
    } else {
        Item.find().then((item) => {
            res.render({item});
        }).catch((err) => {
            console.log("Loi danh sach", err);
        })
    }
}


exports.getChiTiet = (rep, res) => {
    const id = rep.params.id;
    Item.findById(id).then((item) =>{
        res.render("products/chitiet", {item,  layout: "layouts/main" });
    }).catch((err) => {
        console.log("Loi danh sach", err);
    })
}

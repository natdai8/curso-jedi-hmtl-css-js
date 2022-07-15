const cardData = [{
        url: "https://www.196flavors.com/wp-content/uploads/2021/10/croquetas-de-pollo-2fp.jpg",
        title: "Croquetas de jamón"
    }, {
        url: "https://www.196flavors.com/wp-content/uploads/2021/10/croquetas-de-pollo-2fp.jpg", //como si fueran distintas imgs
        title: "Croquetas de pollo"
    }, {
        url: "https://www.196flavors.com/wp-content/uploads/2021/10/croquetas-de-pollo-2fp.jpg",
        title: "Croquetas de queso"
    }
]

$(window).on('load', () => {
    cardData.forEach((param) => { 
        $(`#cards-wrapper`).append (
            `<div class="col-lg-4 col-xs-12 resize">
                <div class="card" style="width: 18rem;">
                    <img src=${param.url} class="card-img-top imagen" alt="Croquetas de jamón">
                    
                    <div class="card-body">
                        <h5 class="card-title"><b>${param.title}</b></h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="centrar">
                            <input type="number" min="0" placeholder="0"/>
                        </div>
                        <br>
                        <div class="resize">
                            <button class="btn btn-outline-danger" type="submit">-</button>
                            <button class="btn btn-outline-success" type="submit">+</button>
                            <button class="btn btn-primary" type="submit">Añadir al carrito</button>
                        </div>               
                    </div>
                </div>
            </div>` 
        )
    });
})

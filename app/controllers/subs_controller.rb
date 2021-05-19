class SubsController < ApplicationController

    def index
        render component: "Subs"
    end

    def show
        render component: "Sub"
    end

    def edit
        render component: "SubEdit"
    end

    def new
        render component: "SubNew"
    end

    def tacos
        render component: "Subs"
    end
end

class SubsController < ApplicationController

    def index
        @subs = Sub.all
        render component: "Subs", props: {subs: @subs, yo: 'yo here'}
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

    def destroy
      @sub = Sub.find(params[:id])
      @sub.destroy
      redirect_to root_path
    end

    def tacos
        render component: "Subs"
    end
end

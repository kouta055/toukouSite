class ApplicationController < ActionController::Base
    def tab
        @articles = Article.all
    end
end

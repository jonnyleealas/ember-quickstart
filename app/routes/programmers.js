import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return ['steve jobs', 'Elon Musk', 'Lex Friedman'];
    }
});

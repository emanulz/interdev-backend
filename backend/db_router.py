
class SplitData_LogsRouter(object):
    def db_for_read(self, model, **hints):
        '''
        Determines where the read operations go based on
        the model.
        '''
        #print("Model meta label", model._meta.app_label)
        if model._meta.app_label == 'logs':
            return 'logs_db'
        else:
            return 'default'
        return None

    def db_for_write(self, model, **hints):
        """
        Attempts to write auth models go to auth_db.
        """
        #print("Model meta label", model._meta.app_label)
        if model._meta.app_label == 'logs':
            return 'logs_db'
        else:
            return 'default'
    def allow_relation(self, obj1, obj2, **hints):
        """
        Relations between objects are allowed if both objects are
        in the default.
        """
        db_list = ('default')
        if obj1._state.db in db_list and obj2._state.db in db_list:
            return True
        return None
    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Wether or not the models in the DB should be able to migrate
        Migrations should always be allowed.
        """
        return True
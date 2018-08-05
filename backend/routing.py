from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import broadcaster.routing
import factura_digital.routing

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            broadcaster.routing.websocket_urlpatterns +
            factura_digital.routing.websocket_urlpatterns
        )
    ),
})

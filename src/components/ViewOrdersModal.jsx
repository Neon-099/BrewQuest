import { useStore } from '../store/orderStore';

const ViewOrdersModal = ({ isOpen, onClose, onShowNotification }) => {
    const { orders, deleteOrder } = useStore();

    if (!isOpen) return null;

    const totalAmount = orders.reduce((sum, order) => sum + order.price, 0);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="orders-modal-title"
                className="relative w-[min(95vw,800px)] max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#F2EDE8] to-[#e5dbd1] px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 id="orders-modal-title" className="text-2xl font-bold text-gray-900">
                                Your Orders
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">
                                {orders.length} {orders.length === 1 ? 'order' : 'orders'} in your cart
                            </p>
                        </div>
                        <button
                            aria-label="Close"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-600 shadow-sm transition hover:bg-gray-50 hover:text-gray-800"
                            onClick={onClose}
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
                    {orders.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 px-6">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                            <p className="text-gray-500 text-center">
                                Start exploring our coffee selection and add some delicious drinks to your cart!
                            </p>
                        </div>
                    ) : (
                        <div className="p-6">
                            {/* Orders List */}
                            <div className="space-y-4">
                                {orders.map((order, index) => (
                                    <div
                                        key={order.id}
                                        className="group relative bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-[#e88a31]/30"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-[#F2EDE8] to-[#e5dbd1] rounded-full flex items-center justify-center">
                                                        <span className="text-[#96734F] font-semibold text-sm">
                                                            {index + 1}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 group-hover:text-[#e88a31] transition-colors">
                                                            {order.name}
                                                        </h4>
                                                        <p className="text-sm text-gray-500">
                                                            Quantity: {order.quantity} × ${order.originalPrice}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <span className="text-lg font-bold text-[#e88a31]">
                                                    ${order.price}
                                                </span>
                                                <button
                                                    onClick={() => {
                                                        deleteOrder(order.id);
                                                        if (onShowNotification) {
                                                            const remainingOrders = orders.length - 1;
                                                            if (remainingOrders === 0) {
                                                                onShowNotification({
                                                                    show: true,
                                                                    message: 'Your cart is now empty',
                                                                    type: 'info'
                                                                });
                                                            } else {
                                                                onShowNotification({
                                                                    show: true,
                                                                    message: `Removed ${order.name} from your cart`,
                                                                    type: 'info'
                                                                });
                                                            }
                                                        }
                                                    }}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 text-red-500 hover:bg-red-50 rounded-lg hover:text-red-700"
                                                    aria-label="Delete order"
                                                >
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
                                    <div className="w-8 h-8 bg-[#e88a31] rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Total Items:</span>
                                        <span className="font-medium text-gray-900">{orders.length}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Subtotal:</span>
                                        <span className="font-medium text-gray-900">${totalAmount.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-3">
                                        <div className="flex justify-between">
                                            <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                                            <span className="text-2xl font-bold text-[#e88a31]">
                                                ${totalAmount.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                {orders.length > 0 && (
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row gap-3 justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Continue Shopping
                            </button>
                            <button
                                className="px-6 py-3 bg-[#e88a31] text-white rounded-lg hover:bg-[#E57D1A] transition-colors font-semibold shadow-sm"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewOrdersModal;

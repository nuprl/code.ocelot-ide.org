"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFailureResponse = function (arg) { return arg.status === 'FAILURE'; };
exports.failureResponse = function (message) { return ({
    status: 'FAILURE',
    data: { message: message }
}); };
exports.successResponse = function (data) { return ({
    status: 'SUCCESS',
    data: data
}); };
exports.validEmailSession = function () {
    var userEmail = localStorage.getItem('userEmail');
    var sessionId = localStorage.getItem('sessionId');
    if (userEmail === null || sessionId === null) {
        return false;
    }
    return true;
};
exports.getUrl = function (path) {
    if (window.location.host.substring(0, 9) === 'localhost') { // if hosted on localhost
        return "http://localhost:8000/" + path;
    }
    return "https://us-central1-umass-compsci220.cloudfunctions.net/paws/" + path;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlscy9hcGkvYXBpSGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQW1CYSxRQUFBLGlCQUFpQixHQUFHLFVBQUMsR0FBZ0IsSUFBNkIsT0FBQSxHQUFHLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBeEIsQ0FBd0IsQ0FBQztBQUUzRixRQUFBLGVBQWUsR0FBRyxVQUFDLE9BQWUsSUFBc0IsT0FBQSxDQUFDO0lBQ2xFLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7Q0FDN0IsQ0FBQyxFQUhtRSxDQUduRSxDQUFDO0FBRVUsUUFBQSxlQUFlLEdBQUcsVUFBSSxJQUFPLElBQXlCLE9BQUEsQ0FBQztJQUNoRSxNQUFNLEVBQUUsU0FBUztJQUNqQixJQUFJLEVBQUUsSUFBSTtDQUNiLENBQUMsRUFIaUUsQ0FHakUsQ0FBQztBQUVVLFFBQUEsaUJBQWlCLEdBQUc7SUFDN0IsSUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXBELElBQUksU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1FBQzFDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQUcsVUFBQyxJQUFZO0lBQy9CLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUUsRUFBRSx5QkFBeUI7UUFDakYsT0FBTywyQkFBeUIsSUFBTSxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxrRUFBZ0UsSUFBTSxDQUFDO0FBQ2xGLENBQUMsQ0FBQyJ9
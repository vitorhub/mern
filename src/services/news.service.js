import News from "../models/News.js";

const createService = (body) => News.create(body);

const findAllService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countNews = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");
/* sort({ _id: -1 })  Traz o ultimo registro */

const findByIdService = (id) => News.findById(id).populate("user");

export const searchByTitleService = (title) =>
  News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

export const byUserService = (id) => {
  News.find({user: id})
  .sort({ _id: -1 })
  .populate("user");
}

export const updateService = (id, title, text, banner) => {
  News.findOneAndUpdate({_id: id}, {title, text, banner}, {rawResult: true,})
}
export const eraseService = (id) => {
  News.findByIdAndDelete({_id: id})
}

export {
  createService,
  findAllService,
  countNews,
  topNewsService,
  findByIdService,
};

import type { Provider } from "next-auth/providers";
import type IAggregateRoot from "@/core/aggregates/IAggregateRoot";
import type IRepository from "@/core/aggregates/IRepository";

type IProviderFactory<T = IAggregateRoot> = (repository?: IRepository<T>) => Provider;

export default IProviderFactory;
